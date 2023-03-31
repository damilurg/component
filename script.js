class Component {
  /**
   * Creates a new instance of the Component class.
   * @constructor
   * @param {Object} template - Template (html representation) of the page element.
   * @param {Object} displayParams - Display Options. Use styles Object with params(backgroundColor, classes, attributes).
   * @param {Object} modifiers - Modifiers. Handles an array with some parameters(functions).
   * @param {Array} textValues - Text values that can contain page elements.
   * @param {Object} events - Events.
   */
  constructor(template, displayParams = {}, textValues = [], modifiers = [], events = {}) {
    this.template = template
    this.displayParams = displayParams
    this.modifiers = modifiers
    this.textValues = textValues
    this.events = events
  }

  generateElement() {
    const element = document.createElement(this.template.type)

    if (this.displayParams.styles) {
      Object.keys(this.displayParams.styles).forEach(style => {
        element.style[style] = this.displayParams.styles[style]
      })
    }

    if (this.displayParams.classes) {
      this.displayParams.classes.forEach(className => {
        element.classList.add(className)
      })
    }

    if (this.displayParams.attributes) {
      Object.keys(this.displayParams.attributes).forEach(attribute => {
        element.setAttribute(attribute, this.displayParams.attributes[attribute])
      })
    }

    if (this.modifiers) {
      this.modifiers.forEach(modifier => {
        modifier(element)
      })
    }

    if (this.textValues) {
      this.textValues.forEach(textValue => {
        element.appendChild(document.createTextNode(textValue))
      })
    }

    if (this.events) {
      Object.keys(this.events).forEach(eventName => {
        element.addEventListener(eventName, this.events[eventName])
      })
    }

    return element
  }
}
