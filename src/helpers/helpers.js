import _ from "lodash";

function getTags(terms, taxonomy) {
  return _.filter(_.flatten(terms), { taxonomy: taxonomy });
}

export default getTags;
