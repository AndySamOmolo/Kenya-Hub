import { generateToolMetadata } from "@/lib/seo";
import { getToolBySlug } from "@/lib/tools-registry";

const tool = getToolBySlug("kra-car-import-calculator")!;
export const metadata = generateToolMetadata(tool);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
