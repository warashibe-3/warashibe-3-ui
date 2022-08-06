import Link from "next/link";
import { Text } from "@nextui-org/react";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  return (
    <header>
      <Text h2>Title</Text>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a style={{ display: "inline-block", padding: 12 }}>{label}</a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
