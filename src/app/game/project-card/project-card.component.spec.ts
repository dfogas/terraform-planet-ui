import {ProjectCardComponent} from './project-card.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

describe('ProjectCardComponent', () => {
    let component: ProjectCardComponent;
    let fixture: ComponentFixture<ProjectCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProjectCardComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
