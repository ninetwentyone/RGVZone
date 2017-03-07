import { RGVZonePage } from './app.po';

describe('rgvzone App', () => {
  let page: RGVZonePage;

  beforeEach(() => {
    page = new RGVZonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
