export const defaults = {
  listings: [0, 1, 2],
  hosts: [],
  homes: []
}

export const resolvers = {
  Query: {
    getListings: (_: any, { listings }: any, { cache }: any) => {
      const data = {
        listings: {
          listings
        }
      };
      cache.writeData({ data })
      return null;
    },
    getHosts: (_: any, { hosts }: any, { cache }: any) => {
      console.log(hosts, cache)
      return null;
    },
    getHomes: (_: any, { homes }: any, { cache }: any) => {
      console.log(homes, cache)
      return null;
    }
  },
  Mutation: {
    loginUser: (_: any, { filter }: any, { cache }: any) => {
      console.log(filter, cache)
      return null;
    }
  }
};
