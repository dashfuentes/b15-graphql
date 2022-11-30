import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`

query getCityByName($name: String!) {
  getCityByName(name: $name) {
    id
    name
    coord {
      lon
      lat
    }
    weather {
      temperature{
        min
        max
      }
      wind{
        speed
      }
      clouds {
        visibility
        humidity
      }
    }
  }
}
`;