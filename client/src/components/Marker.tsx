import React, { createRef } from 'react';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { Event } from '.';
import { FormattedEvent } from '../helpers/format-events';
import './Event.css';

interface MarkerProps {
  isSelected: boolean;
  point: FormattedEvent;
  key: string;
}
export class Marker extends React.Component<MarkerProps, {}> {
  markerRef = createRef<LeafletMarker>();

  componentDidUpdate(): void {
    const { isSelected } = this.props;
    if (this.markerRef.current && isSelected) {
      this.markerRef.current.leafletElement.openPopup();
    }
  }

  render(): JSX.Element {
    const { point } = this.props;
    const { latLng, formattedAddress, key } = point;
    if (!formattedAddress) return <div></div>;
    return (
      <LeafletMarker ref={this.markerRef} position={[latLng.latitude, latLng.longitude] as LatLngTuple} key={key}>
        <Popup>
          <Event event={point} />
        </Popup>
      </LeafletMarker>
    );
  }
}
