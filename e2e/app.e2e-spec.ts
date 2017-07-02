import { AngularPhaserPage } from './app.po';

describe('angular-phaser App', () => {
  let page: AngularPhaserPage;

  beforeEach(() => {
    page = new AngularPhaserPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Phaser');
  });
});
