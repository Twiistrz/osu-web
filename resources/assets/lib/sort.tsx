// Copyright (c) ppy Pty Ltd <contact@ppy.sh>. Licensed under the GNU Affero General Public License v3.0.
// See the LICENCE file in the repository root for full licence text.

import * as React from 'react';

interface Props {
  modifiers?: string[];
  currentValue: string;
  title?: string;
  values: string[];
  onChange(event: React.MouseEvent<HTMLButtonElement>): void;
}

export class Sort extends React.PureComponent<Props> {
  render() {
    const items = this.props.values.map((value) => {
      let cssClasses = 'sort__item sort__item--button';
      if (this.props.currentValue === value) {
        cssClasses += ' sort__item--active';
      }

      return (
        <button
          className={cssClasses}
          data-value={value}
          key={value}
          onClick={this.props.onChange}
        >
          {/* FIXME: add icon support */}
          {value === 'rank'
            ? <span>
                <i className={`fas fa-extra-mode-${currentUser.playmode ?? 'osu'}`} /> {osu.trans('sort.rank')}
              </span>
            : osu.trans(`sort.${value}`)
          }
        </button>
      );
    });

    return (
      <div className={osu.classWithModifiers('sort', this.props.modifiers)}>
        <div className='sort__items'>
          <span className='sort__item sort__item--title'>{this.props.title ?? osu.trans('sort._')}</span>
          {items}
        </div>
      </div>
    );
  }
}
