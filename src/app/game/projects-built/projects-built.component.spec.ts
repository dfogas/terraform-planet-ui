import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsBuiltComponent } from './projects-built.component';

describe('ProjectsBuiltComponent', () => {
    let component: ProjectsBuiltComponent;
    let fixture: ComponentFixture<ProjectsBuiltComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProjectsBuiltComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectsBuiltComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
