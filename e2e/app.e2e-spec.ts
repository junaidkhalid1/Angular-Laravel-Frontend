import { AngularLaravelFrontendPage } from './app.po';

describe('angular-laravel-frontend App', () => {
  let page: AngularLaravelFrontendPage;

  beforeEach(() => {
    page = new AngularLaravelFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
