import { useState } from "react";

/**
 * @type RecursiveMenuItem[]
 */
const menu = [
  {
    title: 'Item 1',
    children: [
      {
        title: 'Item 1.1',
        children: [
          {
            title: 'Item 1.1.1',
          },
        ],
      },
      {
        title: 'Item 1.2',
      },
    ],
  },
  {
    title: 'Item 2',
    children: [
      {
        title: 'Item 2.1',
      },
    ],
  },
];

/**
 * @typedef RecursiveMenuItem
 * @property {string} title 
 * @property {RecursiveMenuItem[]} [children]
 */

/** 
 * @typedef RecursiveMenuProps
 * @property {RecursiveMenuItem[]} items
 */

/**
 * 
 * @param {RecursiveMenuProps} props
 */
export function RecursiveMenu({ items }) {
  const [displayChildren, switchDisplayChildren] = useState({});

  function handleClick(item) {
    switchDisplayChildren({
      ...displayChildren,
      [item.title]: !displayChildren[item.title],
    })
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.title}>
          {item.title}{' '}
          {item.children && (
          <button 
            onClick={() => handleClick(item)} 
          >
            {displayChildren[item.title] 
              ? '-' 
              : '+'
            }
          </button>)}
          {
            displayChildren[item.title] && 
            item.children && 
            <RecursiveMenu items={item.children} />
          }
        </li>
      ))}
    </ul>
  )
}
