import { InMemoryCache, gql } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer'; // eslint-disable-line import/no-extraneous-dependencies
import Component from '..';

const createCache = (items: number) => {
  const cache = new InMemoryCache();
  cache.writeQuery({
    query: gql`
      query LinksList {
        links {
          id
          title
          url
        }
      }
    `,
    data: {
      links: new Array(items).fill('').map((_, i) => {
        return {
          __typename: 'Link',
          id: `link-${i}`,
          title: `link title #${i}`,
          url: `http://site-${i}.com`,
        };
      }),
    },
  });
  return cache;
};

describe('LinksList', () => {
  it('renders correctly when no item', () => {
    const component = renderer.create(
      <MockedProvider cache={createCache(0)}>
        <Component />
      </MockedProvider>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly  when some items', () => {
    const component = renderer.create(
      <MockedProvider cache={createCache(3)}>
        <Component />
      </MockedProvider>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
