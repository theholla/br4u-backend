import React from 'react';
import { ExternalLink } from '../components';
import { Link as RouterLink } from 'react-router-dom';

export function About(): JSX.Element {
  return (
    <div className="page-content">
      <h1>About BikeRides4U.com</h1>
      <div>
        <p>
          Bikey folks in Portland may have used the{' '}
          <ExternalLink href="https://www.shift2bikes.org/calendar/" text="Shift2Bikes calendar" /> to discover upcoming
          rides... most famously every summer during{' '}
          <ExternalLink href="https://www.shift2bikes.org/pedalpalooza-calendar/" text="Pedalpalooza" />.
        </p>
        <p>
          BikeRides4U.com is a passion project that aims to complement the Shift cal by providing a filterable,
          interactive map view of the same ride data. It pings the Shift2Bikes calendar API and displays bike fun events
          on an interactive map.
        </p>
      </div>
      <div>
        <h2>About Shift2Bikes</h2>
        <p>
          Shift&apos;s mission is to promote inclusive bike fun. Shift also facilitates lots of events. Examples of
          Shift-related activities include breakfast give aways, social rides, educational bike tours, actions to raise
          awareness about cyclist injuries or deaths, information-sharing events, art-bike parades and more.
        </p>
        <p>
          See <ExternalLink href="http://shift2bikes.org/" text="Shift2Bikes.org" /> for more information about bike fun
          in Portland.
        </p>
      </div>
      <div>
        <h2>Disclaimers</h2>
        <ol>
          <li>
            <strong>Affiliations:</strong> This website is a labor of love and is not affiliated with the organization
            Shift2Bikes
          </li>
          <li>
            <strong>Data Integrity:</strong> This project is in beta. Ride data and locations may not be accurate
          </li>
        </ol>
      </div>
      <div>
        <h2>Still have questions?</h2>
        <p>
          Check out the <RouterLink to="/PAQ">Potentially Asked Questions</RouterLink> page for more answers.
        </p>
      </div>
    </div>
  );
}
