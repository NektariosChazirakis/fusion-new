import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
  });

  beforeEach(() => spectator = createComponent());

  it('should correctly create the component', () => {
    expect(spectator).toBeTruthy();
  })

  it('should have "fusion-new" as title', () => {
    expect(spectator.component.title).toEqual('fusion-new');
  });

});
