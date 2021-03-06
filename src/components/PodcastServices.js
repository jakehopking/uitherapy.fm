import React from 'react';
// import PropTypes from 'prop-types';
import {
  Applepodcasts,
  Googlepodcasts,
  Overcast,
  Pocketcasts,
  Stitcher,
  Spotify,
  Rss,
} from '@icons-pack/react-simple-icons';
import ButtonAnchor from './ButtonAnchor';

const PodcastServices = (props) => {
  const data = [
    {
      title: 'Apple Podcasts',
      url: 'https://podcasts.apple.com/gb/podcast/ui-therapy/id1520284117',
      icon: Applepodcasts,
    },
    {
      title: 'Google Podcasts',
      url:
        'https://podcasts.google.com/u/1/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xMTgwMjgzLnJzcw?ep=14',
      icon: Googlepodcasts,
    },
    {
      title: 'Overcast',
      url: 'https://overcast.fm/itunes1520284117',
      icon: Overcast,
    },
    {
      title: 'Pocketcasts',
      url: 'https://pca.st/itunes/1520284117',
      icon: Pocketcasts,
    },
    {
      title: 'Stitcher',
      url: 'https://www.stitcher.com/podcast/ui-therapy',
      icon: Stitcher,
    },
    {
      title: 'Spotify',
      url:
        'https://open.spotify.com/show/30sbfREuT49WwBakEZAFyO?si=TLt8710YRpa8B70JTbUUKQ',
      icon: Spotify,
    },
    {
      title: 'RSS',
      url: 'https://feeds.buzzsprout.com/1180283.rss',
      icon: Rss,
    },
  ];

  return (
    <div className="podcast-services">
      {data.map(({title, url, icon: Icon}, index) => (
        <ButtonAnchor
          key={index}
          className="btn--podcast"
          href={url}
          icon={<Icon />}
        >
          {title}
        </ButtonAnchor>
      ))}
    </div>
  );
};

// PodcastServices.propTypes = {};

export default PodcastServices;
