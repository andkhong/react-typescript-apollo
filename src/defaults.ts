// interface Credentials {
//   isAuthenticated: boolean;
//   jwt: string;
//   user: string;
//   email: string;
// }

// interface Listings {
//   listing: any;
// }

// interface Hosts {
//   host: any
// }

// interface Homes {
//   home: any
// }

// interface defaultState {
//   credentials: Credentials;
//   listings: Listings;
//   hosts: Hosts;
//   homes: Homes;
// }

export const defaults = {
  // credentials: {
  //     isAuthenticated: false,
  //     jwt: '',
  //     user: '',
  //     email: '',
  // },
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
