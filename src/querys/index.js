import { gql } from '@apollo/client';

export const INFO_CHAR = gql`
  query GET_CHAR($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        species
        gender
        image
        status
        type
        origin {
          name
        }
        location {
          name
        }
        episode {
          name
          episode
        }
      }
    }
  }
`;

export const INFO_ALL_LOC = gql`
  query GET_LOC($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
      }
      results {
        id
        type
        dimension
        residents {
          name
        }
        name

      }
      }
    }
`;

export const INFO_LOC = gql`
  query GET_LOC($id: ID!) {
	  location (id: $id) {
      name
      type
      dimension
      residents {
        name
        status
        species
        id
        type
        gender
        origin {
          name
          type
          dimension
        }
        location {
          name
        }
        image
        episode {
          name
          episode
        }
      }
    }
  }
`;

export const INFO_ALL_EPS = gql`
  query GET_EP($page: Int) {
    episodes (page: $page) {
      info {
        pages
        prev
        next
      }
      results {
        name
        episode
        air_date
        id
      }
    }
  }
`;

export const INFO_EP = gql`
  query GET_EP($id: ID!) {
	  episode (id: $id) {
      name
      air_date
      episode
      characters {
        name
        id
        status
        species
        type
        image
        gender
        origin {
          name
          type
          dimension
        }
        location {
          name
        }
        episode {
          episode
          name
        }
      }
    }
  }
`;
