import { Card, CardTitle } from "@/components/ui/card";
import { CircleCheck, CircleX } from "lucide-react";

const RULES = [
  {
    type: "allow",
    text: "Be respectful to all participants",
  },
  {
    type: "deny",
    text: "No ticket selling in chat",
  },
  {
    type: "allow",
    text: "Use Transfer Board for trades",
  },
  {
    type: "deny",
    text: "Don't share personal information",
  },
  {
    type: "allow",
    text: "Keep discussions concert-related",
  },
  {
    type: "deny",
    text: "No spam or promotional content",
  },
] as const;

export default function ChatRulesCard() {
  return (
    <Card className="gap-4 p-7">
      <CardTitle className="text-text-main text-xl font-bold">Chat Room Rules</CardTitle>

      <ul className="flex flex-col gap-3">
        {RULES.map((rule, index) => (
          <RuleItem key={index} type={rule.type} text={rule.text} />
        ))}
      </ul>
    </Card>
  );
}

function RuleItem({ type, text }: { type: "allow" | "deny"; text: string }) {
  const Icon = type === "allow" ? CircleCheck : CircleX;

  return (
    <li className="flex items-center gap-3">
      <span className="inline-flex h-4 w-4 items-center">
        <Icon size={16} />
      </span>
      <span className="text-text-sub">{text}</span>
    </li>
  );
}
