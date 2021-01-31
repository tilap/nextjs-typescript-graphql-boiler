import Service from '../Service';

export interface Link {
  id: string;
  url: string;
  title: string;
}

const data: Link[] = [
  { id: 'link-1', url: 'http:s://google.com/', title: 'Google' },
  { id: 'link-2', url: 'http:s://google.com/', title: 'Yahoo' },
  { id: 'link-3', url: 'http:s://google.com/', title: 'Msn' },
  { id: 'link-4', url: 'http:s://www.evaneos.com/', title: 'Evaneos' },
  { id: 'link-5', url: 'http:s://comet.co/', title: 'Comet' },
];

class Links extends Service {
  // eslint-disable-next-line require-await, class-methods-use-this
  async getMany(): Promise<Link[]> {
    return Promise.resolve(data);
  }
}

export default Links;
