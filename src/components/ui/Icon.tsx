import {
  Clock,
  MessageSquareQuote,
  Handshake,
  ShieldCheck,
  LineChart,
  BadgeCheck,
  Megaphone,
  ScrollText,
  MapPin,
  Phone,
  Mail,
  Star,
  Award,
  Home,
  TrendingUp,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Clock,
  MessageSquareQuote,
  Handshake,
  ShieldCheck,
  LineChart,
  BadgeCheck,
  Megaphone,
  ScrollText,
  MapPin,
  Phone,
  Mail,
  Star,
  Award,
  Home,
  TrendingUp,
  CheckCircle2,
};

export default function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = MAP[name] ?? ShieldCheck;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
