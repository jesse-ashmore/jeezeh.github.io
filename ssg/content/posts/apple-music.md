+++
title = "From Spotify to Apple Music, every sharp edge"
date = 2025-11-07
external_links_target_blank = true
[extra]
featured = true
toc = true
+++

My Spotify Family Plan was nearing expiry, so given the historical and recently mounting negative sentiment around the platform (low pay-outs, artists pulling their music, CEO investments, AI-heavy product direction), I decided it was time to look for an alternative.

**In this entry, I reflect on what music listening and curation means to me, and journal my experiences with moving from Spotify to Apple Music**, documenting every sharp edge, incompatibility, and workaround I've discovered on the way.

---

## How I listen

My listening habits are regular by most standards; commuting, exercising, and working all happen to a mostly passive background soundtrack across devices like my Android phone, Windows PC, and MacBooks (work and personal). At home, most evenings involve some sort of active listening through a system I've built up over the years:

- Wharfedale Evo 4.2 ('bookshelf' speakers; they do not fit on a bookshelf)
- Audiolab a6000 (amplifier)
- MiniDSP Flex (room correction for all inputs)
- Shanling CR60 (CD Player, Transport, and Ripper)
- HP Elitedesk 800 G3 Mini (home server running Ubuntu for streaming)

<!-- TODO: Diagram -->

The home server might be a surprise here, but why pay hundreds for a dedicated network streamer when I already own a server that could _theoretically_ do the same thing. More on this later.

### Collection and curation

Music, and its collection and curation, has been a fundamental constant in my life. In my early childhood, curation took the form of mixtapes created from live radio recordings. In my tweens, I used my [daily allowance of 50MB of internet for only €1 (!)](https://web.archive.org/web/20100410163535/http://www.vodafone.ie/vlive/internetmobile) to download as many 128Kbps MP3s as I could and burn them to CDs. Since then, I've built a yearly collection of favourites in my `Starred YYYY` playlists — grandfathered from Spotify's "Starred" songs collection — and more recently began categorizing these into their own tag/vibe-based playlists.

<aside>
It's a crime that music tagging is not the default way to build and collect music. Imagine if you could tag a song like `favourite`, `workout`, `great bassline`, etc. and build playlists and queues based on combinations of these!
</aside>

Music curation and discovery is still important to me, but the way I listen is changing has been slowly changing. Over this last year, I've found myself with a growing collection of physical media, enjoying a more intentional and ritualistic approach to listening and collecting. Playlists are still the backbone of most of my listening and discovery, but I've started to rediscover the joy in picking a single album (physical or digital) and listening from start to end. This was common as a child when my collection overwhelmingly comprised label-released CDs, but my obsession with playlisting born from the crazed media consumption of my teenage years won out in the long run.

From a curation perspective, Spotify is great for me. Over the years, my weekly ritual of funneling Discover Weekly + Release Radar favourites into various playlists organized by year, genre, vibes, and activities has left me with a rich and eclectic mix of music for all occasions. It's seriously important to me; but Spotify is a playlist-first platform. And today, as I reflect on what the _process of music listening means to me_, I find myself increasingly alienated by Spotify's pursuit of the algorithmic experience over a self-directed one. Recommended playlists, daily mixes, AI DJs, and more all fight for my attention, trying to pull me away from control and organization, and towards an endless stream and commodification of beats and vibes.

## Finding an alternative to Spotify

These days, we are not poor for music streaming platforms, but there are compromises with each. I previously tried Tidal and Deezer, and found them fine, but besides lossless streaming in the earlier days, I didn't feel like they were distinguished enough from Spotify to pull me away. YouTube Music would be a good choice, especially as I watch a lot of YouTube, but tying more of world into the Google ecosystem seemed like a bad idea. Amazon Music seems promising too, but I've personally heard mixed reports on it as a platform so decided not to try it yet.

I finally landed on two platforms I was interested in: **Apple Music** — which a friend had recently migrated to from Spotify and was raving about — and **Qobuz**.

Qobuz is interesting: branded as an audiophile streaming platform that promotes music ownership as a first-class citizen, I signed up for the trial. Things were good, until I found it lacked playlist folders. I have a lot of playlists, and organizing them by category is important to me. At the time, Qobuz also lacked in the discovery department, with no clear analogy to Spotify's Discover Weekly and Release Radar playlists. These two main inconveniences were enough to push me away from Qobuz _for the time being_, but in hindsight would become relatively minor annoyances compared to what Apple Music had in store. Before we move onto Apple Music, I do want to highlight Qobuz's potential to be a top-tier platform. The app experience was robust, lossless playback as a priority, inclusion of a duo plan for couples, and the best royalty rates for artists out of any other platform make Qobuz stand out as a strong contender, and something I will return to if Apple Music fails to win me over in the next few months.

## Apple Music

Feeling a little disheartened from my initial Qobuz experience, I decided to research Apple Music. **Until recently, I had assumed it was only available as a MacOS and iOS app**. I was shocked to find that they had an Android App — a very good one at that — as well as a Windows app. I knew there was an iTunes for Windows app, which didn't give me much hope based on my previous experiences with it, but the Windows App seemed to be relatively functional and worth trying out.

With the 3 month trial that came with a recent MacBook Air purchase, I decided there was little to lose by trying out Apple Music. Fortunately, my time and sanity worthless.

### A great first impression

As mentioned, the Android app is surprisingly well-put-together. It's fast, looks gorgeous, and has most of the features I want from a portable music app. I was

- Android app
- Lossless (?)s

## P

- [!good] Android app
  - Quite nicely designed, but takes some getting used to
  - Streaming is noticeable slower to start than competitors
  - But overall performance is really great here, even for browsing through tens of thousands of tracks in Library
  - Speaking of Library, things were a bit confusing at first...
- [!pain] Library vs Playlists: accidentally wiping out your music collection
  - `caffeinate -s -i -u` while letting it run
  - [!great] Bring your own music
    - [!pain] some of them, anyway
      - [!tip] Used MediaHuman Audio Converter to convert my FLAC collection to ALAC
      - [!pain] Sometimes tracks would simply not get uploaded, so I ended up with empty albums
        - [!tip] Upload the same ALAC files from multiple devices, eventually union of all the attempts will be your full collection
    - Excellent answer to Spotify's somewhat lackluster 'Local Files' feature, which requires you handle moving music across devices in your own way
    -
- Spotify Connect -> Airplay?
  - No Linux player (Cider has... problems)
  - Chromecast servers are non-existent?
  - Airplay 1 vs. 2, bitrate
    - Android resamples, Windows client doesn't use lossless
  - [!tip] Shairport-sync <3
    - Run both Airplay 1 and 2 in parallel ([GitHub Issue](https://github.com/mikebrady/shairport-sync/issues/1816#issuecomment-2476287591))
  - [!tip] Airmusic
    - No recording allowed (except if you're on Android, then go ahead)
- Lossless
- Last.fm and scrobbling
  - [Pano Scrobbler](https://github.com/kawaiiDango/pano-scrobbler)
