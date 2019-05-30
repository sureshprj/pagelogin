import './test';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

declare var jasmine;

import './polyfills';

import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { AppComponent , templateDirven } from './app/app.component';
describe('TEstesdf ', () => {
   let fixture: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
    .compileComponents();
  }));
  beforeEach(() => {
     fixture = TestBed.createComponent(AppComponent);
  })

   it('should create', () => {
    fixture.detectChanges();
    console.log(fixture.componentInstance)
    expect(true).toBeTruthy();
  });
})

//
bootstrap();

//
function bootstrap () {
  if (window['jasmineRef']) {
    location.reload();
    return;
  } else {
    window.onload(undefined);
    window['jasmineRef'] = jasmine.getEnv();
  }

  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}

