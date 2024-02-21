const config = {
  // Auth: {
  //   region: "ap-northeast-1",
  //   userPoolId: "<USer Pool ID>",
  //   userPoolWebClientId: "<User Pool Client ID>",
  //   authenticationFlowType: "<Auth Flow Protocol>"
  // },
  API: {
      endpoints: [
          {
              name: "MainApi",
              endpoint:"<api gateway endpoint url>",
          },
      ]
  }
};

export default config;
