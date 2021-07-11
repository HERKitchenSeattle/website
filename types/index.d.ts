interface agentDataBrands {
  brand: string;
  version: string;
}
interface UserAgentData {
  brands: Array<agentDataBrands>;
  mobile: boolean;
}
interface NavigatorID {
  readonly userAgentData: UserAgentData;
}
