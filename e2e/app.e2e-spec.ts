import { AgRedditPage } from './app.po';

describe('ag-reddit App', function() {
  let page: AgRedditPage;

  beforeEach(() => {
    page = new AgRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
