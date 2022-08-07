/* eslint-disable @typescript-eslint/naming-convention */
import { Container, Spacer, Table, Text, User } from "@nextui-org/react";
import { Loading } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "src/components/Layout/layout";

import type { LineLoginAuth } from "./auth";

interface TokenInfo {
  contract_id: string;
  name: string;
  amount: number;
  token_type: string | null;
}

interface TokensResponse {
  st_feedback_points: TokenInfo | null;
  ft_planning_points: TokenInfo | null;
  ft_ingredients_preparation_points: TokenInfo | null;
  ft_administration_of_the_day_points: TokenInfo | null;
  ft_payoff_points: TokenInfo | null;
}

const loadProfile = (): LineLoginAuth => {
  const profile: LineLoginAuth = JSON.parse(localStorage.getItem("profile") || "{}");
  return profile;
};

const fetchMyTokens = async (profile: LineLoginAuth): Promise<TokensResponse> => {
  const { snsId } = profile;
  if (snsId) {
    const { data } = await axios.get<TokensResponse>(`/api/v1/blockchain/users/${snsId}/tokens`);
    return data;
  }
  return {
    st_feedback_points: null,
    ft_planning_points: null,
    ft_ingredients_preparation_points: null,
    ft_administration_of_the_day_points: null,
    ft_payoff_points: null,
  };
};

const Profile = () => {
  const [profile, setProfile] = useState(null as LineLoginAuth | null);
  const [tokens, setTokens] = useState(null as TokensResponse | null);

  useEffect(() => {
    //
    if (profile !== null) {
      fetchMyTokens(profile).then((ret) => {
        setTokens(ret);
      });
    }
  }, [profile]);

  !profile && setProfile(loadProfile());

  return (
    <Layout
      title="Profile"
      prevRoute={{
        title: "Back",
        href: "/event",
      }}
    >
      <Container>
        <Spacer y={2} />
        <User src={profile?.picture} name={profile?.name} description={profile?.snsId} size="xl" bordered />
        <Spacer y={2} />
        {tokens ? (
          <Table sticked selectionMode="single">
            <Table.Header>
              <Table.Column>NAME</Table.Column>
              <Table.Column>AMOUNT</Table.Column>
            </Table.Header>
            <Table.Body>
              {Object.entries(tokens).map((kv, index) => {
                const value: TokenInfo | null = kv[1];
                return (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Text weight="bold" color="defautl">
                        {value ? value.name : kv[0].substring(0, 8)}
                      </Text>
                      <Text size="0.8em" weight="light" color="#11181C">
                        {value ? value.contract_id : "-"}
                        {value?.token_type ? `-${value.token_type}` : "-"}
                      </Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text weight="bold">{value ? value.amount : "-"}</Text>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        ) : (
          <Loading css={{ margin: "auto", display: "flex", alignItems: "center" }}>Loading</Loading>
        )}

        <Spacer y={4} />
      </Container>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Profile;
