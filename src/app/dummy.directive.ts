import { Directive, ElementRef, Host, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[appDummy]'
})
export class DummyDirective implements OnInit, OnDestroy {

    public static addedKey = 'directiveAdded';
    public static removeKey = 'directivesRemoved';

    private destroy = new Subject<void>();

    constructor(
        @Host() private element: ElementRef<HTMLSpanElement>
    ) {}

    ngOnInit() {
        if (window[DummyDirective.addedKey] === undefined) {
            window[DummyDirective.addedKey] = 0;
        }

        if (window[DummyDirective.removeKey] === undefined) {
            window[DummyDirective.removeKey] = 0;
        }

        window[DummyDirective.addedKey] += 1;

        // Lets say we for instance want to add a listener on this element for custom logic.
        fromEvent(this.element.nativeElement, 'click')
            .pipe(takeUntil(this.destroy))
            .subscribe(event => console.log(event));
    }

    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
        window[DummyDirective.removeKey] += 1;
    }
}
