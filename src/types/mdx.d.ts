declare module "*.mdx" {
  import * as React from "react";
  let MDXComponent: React.ComponentType<Record<string, unknown>>;
  export default MDXComponent;
}
