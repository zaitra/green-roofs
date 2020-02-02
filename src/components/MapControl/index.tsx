import ReactDOM from "react-dom";
import { MapControl, withLeaflet } from "react-leaflet";
import { Control, DomUtil, DomEvent } from "leaflet";
/*
 *
 *  Code copied from library: https://www.npmjs.com/package/react-leaflet-control
 * 	It's basic wrapper of element on map you can put to 4 map corners
 */
const DumbControl = Control.extend({
  options: {
    className: "",
    onOff: "",
    handleOff: function noop() {}
  },

  onAdd(/* map */) {
    var _controlDiv = DomUtil.create("div", this.options.className);
    DomEvent.disableClickPropagation(_controlDiv);
    return _controlDiv;
  },

  onRemove(map :any) {
    if (this.options.onOff) {
      map.off(this.options.onOff, this.options.handleOff, this);
    }

    return this;
  }
});

export default withLeaflet(
  class LeafletControl extends MapControl {
    createLeafletElement(props :any) {
      return new DumbControl(Object.assign({}, props));
    }

    componentDidMount() {
      if (super.componentDidMount)
        super.componentDidMount();

      // This is needed because the control is only attached to the map in
      // MapControl's componentDidMount, so the container is not available
      // until this is called. We need to now force a render so that the
      // portal and children are actually rendered.
      this.forceUpdate();
    }

    render() {
      if (!this.leafletElement || !this.leafletElement.getContainer()) {
        return null;
      }
      return ReactDOM.createPortal(
		this.props.children,
		// @ts-ignore
        this.leafletElement.getContainer()
      );
    }
  }
);
