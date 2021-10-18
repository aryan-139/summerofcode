/*import React from 'react';
import Card from './Card';

const CardList = ({ colleges }) => {
   
  return (
    <div>
      {
        colleges.map((user, i) => {
          return (
            <Card
              key={i}
              id={colleges[i].id}
              name={colleges[i].name}
              country={colleges[i].country}
              website={colleges[i].website}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
*/

import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}
export default CardList;
