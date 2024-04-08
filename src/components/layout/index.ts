import Header from "./header"
import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd"

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
        Header={Header}
        Title={(titleProps) => <ThemedTitleV2{...titleProps} text="Refine" /
        >}
        >
        {children}
    </ThemedLayoutv2>
  )
}

export default Layout