import { ProdDashboard2Page } from './app.po';

describe('prod-dashboard2 App', function() {
  let page: ProdDashboard2Page;

  beforeEach(() => {
    page = new ProdDashboard2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
