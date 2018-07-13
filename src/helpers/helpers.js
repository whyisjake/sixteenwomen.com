import _ from "lodash";

function getTags(terms, taxonomy) {
  console.log(terms);
  const flat = _.flatten(terms);
  console.log(flat);
  return _.filter(flat, { taxonomy: taxonomy });
}

export default getTags;
