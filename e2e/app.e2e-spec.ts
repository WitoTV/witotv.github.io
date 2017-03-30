import { WitoCliPage } from './app.po';

describe('wito-cli App', () => {
  let page: WitoCliPage;

  beforeEach(() => {
    page = new WitoCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
