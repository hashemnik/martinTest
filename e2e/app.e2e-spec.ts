import { MartinTestPage } from './app.po';

describe('martin-test App', function() {
  let page: MartinTestPage;

  beforeEach(() => {
    page = new MartinTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
