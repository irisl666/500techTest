import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr style={{ width: '100%', textAlign: 'center' }}>
        {config.map((item) => <th key={item.title}>{item.title}</th>)}
      </tr>
    </thead>
    <tbody>
      {data.map((item) => {
        return (<tr key={item.imdbID + item.Year}>
          {config.map((conf) => {
            return <td style={{ width: '200px', textAlign: 'center' }} key={item.imdbID + item[conf.field]}>
              {typeof item[conf.field] === 'object' ?
                React.createElement(conf.component, { data: item[conf.field] })
                : item[conf.field]}
            </td>
          })}
        </tr>)
      })
      }

    </tbody>
  </table>
);

export default Grid;