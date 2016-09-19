/**
 * Created by lidong on 16/9/19.
 */
import { Component } from '@angular/core';
import { Hero }    from './hero';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})

export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    /**
     * 在通过 NgIf 绑定到 active 标志之后，点击“新增英雄”将从 DOM 中移除这个表单，并在一眨眼的功夫重建它。
     * 重新创建的表单处于“全新”状态。错误信息被隐藏了。
     * @type {boolean}
     */
    active = true;
    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
