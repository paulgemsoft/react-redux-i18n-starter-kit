import React, {Component, PropTypes} from 'react';
import {defineMessages, injectIntl, intlShape, FormattedMessage} from 'react-intl';
const messages = defineMessages({
  spanish: {
    id: 'languageSelector.spanish',
    description: 'Select language',
    defaultMessage: 'Spanish'
  },
  english: {
    id: 'languageSelector.english',
    description: 'Select language',
    defaultMessage: 'English'
  },
  french: {
    id: 'languageSelector.french',
    description: 'Select language',
    defaultMessage: 'French'
  }
})

class LanguageSelector extends Component {
    render () {
      const {formatMessage, locale} = this.props.intl
      return (
        <select defaultValue={locale} onChange={(e) => this.handleChange(e)}>
                <option value='es'>{formatMessage(messages.spanish)}</option>
                <option value='fr'>{formatMessage(messages.french)}</option>
            <option value='en'>{formatMessage(messages.english)}</option>
        </select>
        )
    }
    handleChange (e) {
      this.props.onChange(e.target.value)
    }
}

LanguageSelector.propTypes = {
  intl: intlShape.isRequired,
  onChange: PropTypes.func.isRequired
}
export default injectIntl(LanguageSelector)