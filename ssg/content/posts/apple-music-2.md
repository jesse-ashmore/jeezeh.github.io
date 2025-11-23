+++
title = "From Spotify to Apple Music — every sharp edge"
date = 2025-11-07
external_links_target_blank = true
[extra]
featured = true
toc = true
+++

<div class="card">
This is the second entry in a duology of posts covering my move from Spotify to Apple Music.

[In the previous entry](/posts/apple-music-2), I detailed my process for music discovery and curation and reflect on what music as a hobby means to me.

Here, I cover my journey of onboarding and adapting to Apple Music as a primarily non-Apple user. This entry is less reflective than the first, and serves as both documentation and a trouble-shooting guide for future users in a similar boat. **This will get technical.**

</div>

## A great first impression

{{ image(url="android-transfer.jpg", alt="Apple Music (Android): Playlist transfer",  end=true, no_hover=true)}}

Apple is generous enough to provide free access to SongShift (a playlist transfer service) for users moving to Apple Music. Within a few minutes I kicked off the process to move all my playlists, and by the next time I remembered to check on the app it had completed. Given some playlists had thousands of songs, the speed and accuracy of the migration was impressive.

Although it didn't copy my folder structure, it only took a few minutes to create them by hand and get back to the same point I left from with Spotify. This was a great first impression that would continue through the Android app.

It's fast, looks gorgeous, and has most of the features I want from a portable music app. It breezes through tens of thousands of tracks in my Library without a hitch. It also has pretty good feature parity with Apple devices, sometimes even getting new features like AutoMix first due to not being tied to iOS and macOS release cycles.

## Bring your own music

Apple Music's roots in iTunes and their focus on music ownership serves users with existing digital collections very well. From any desktop device (Windows or Mac), you can upload local files to your Apple Music account and have these available in your Library. This is an excellent answer to Spotify's somewhat lackluster 'Local Files' feature, which is an opt-in feature and requires at least one computer to have a copy of the files on the same network for others to sync from.

Unfortunately, the import process for Apple Music is not perfect either.

{% alert(note=true) %}
From this point on, the post will turn into a bit of a trouble-shooting guide.
{% end %}

### Alac of supported formats

Despite being able to import local music in a variety of popular formats including MP3, **FLAC is not supported for imports**. This is unusual given support for their own, equivalent lossless ALAC format and others like WAV. In any case, I got around this by using [MediaHuman Audio Converter](https://www.mediahuman.com/audio-converter/), which thankfully supports both Windows and Mac, to quickly convert 50GB+ of FLACs to ALAC. You can also do this with `ffmpeg` directly, but I never figured out all the flags needed to preserve directory structures and metadata along the way.

<details>
<summary>Aside: OneDrive and Apple Music conflicts</summary>

On Windows, Apple Music uses your local user's _Music_ folder (`%UserProfile%\Music`) to store library data, cache, downloaded tracks, and imported music (if you choose to copy imported files). There's a handy option in the settings which allows you to change this:

![An option allowing users to control where Apple stores its library and other data](windows-music-folder.png#no-hover)

**This setting does not work.** _Mostly_.

While _some_ data respects this location, such as imports and underlying library files, the app still seems to keep other types of data in `%UserProfile%\Music`. From what I can tell, it creates directories and files like metadata and artwork _for every song you play_. This quickly adds up to a huge number of files, which is a problem if you keep your Music library synced in OneDrive, which many users will do by-default these days.

{% alert(tip=true) %}
It's possible that you could manipulate the default location through editing some config or registry files, but I decided to bite the bullet and just **move my actual Music data to a separate OneDrive folder, and turned off OneDrive backup for `%UserProfile%\Music`**.

This is one of many behavioural changes that Apple Music will ask of its users that do not follow the yellow brick road of Cupertino.
{% end %}

</details>

Once converted, it was time to import everything. After importing my playlists and uploading my local music, I discovered two strange issues:

1. Many albums uploaded from my local collection were missing random songs
2. Playlists would occasionally lose tracks or appear to reset to earlier states

### Missing uploads

<aside>
<figure>
{{ image(url="apple-missing-songs.png", alt="An album in Apple Music with missing songs", no_hover=true)}}
<figcaption>Missing uploads</figcaption>
<figure>
</aside>
It seems with a large enough collection, the app will lose track (hah!) of certain songs during the upload/matching process, leave you with partial albums. After several attempts to re-upload the collection and even the missing songs individually, I couldn't get them to appear in my library.

{% alert(tip=true) %}
What worked was to try and re-upload all my albums again from a different device (like my Mac), only then were the gaps in my albums filled correctly. Maybe this was just bad luck.
{% end %}

### Missing playlist songs

A few days later, I opened my Starred 2025 playlist as usual. To my horror, all the songs I added to it since migrating from Spotify disappeared before my eyes. What just happened?! I saw them there, then it performed some sort of sync and everything recently added was removed. **This was my fault**, but it wasn't immediately obvious why.

![](apple-library-add.jpg#no-hover#end)
Coming from Spotify, it's easy to assume the _library_ is just an arbitrary list of songs you might have "Liked" or added to playlists in the past. In fact, in Apple Music, there are settings to make the behavior feel identical to Spotify.

{% alert(caution=true,text="hello") %}
The Library is _**not**_ just some arbitrary list.
{% end %}

If a song is a part of your library _and_ in a playlist, they are now inextricably linked, with the Library taking priority. This means that **deleting a song from your library will also remove it from any playlists it's a part of**.

I had enabled the _auto-add_ toggles at first without much thought, but later decided that I wanted to try and keep my Library and playlists separate, with the former used only for 'owned' music. So, I selected everyting in my library I hadn't uploaded myself, and hit delete. With it, all the music I had collected since my initial migration was lost.

It actually took multiple instances of this happening before I finally realized what I'd done and the relationship between playlists and the Library. [I'm not the only one confused by this behavior](https://www.reddit.com/r/AppleMusic/comments/1fnjbiz/deleting_songs_from_library_deletes_them_from/).

## Leaning into the Library

Despite my shaky experience with the Library so far, I recognised its potential for helping me organize all the music I've collected over the years. So, rather than trying to use the library as a separate storage to my playlists, I've decided to lean in and track _all music_ that I want to keep around in some form. From a curation perspective, there's no tangible difference between my collection of physical media, childhood mixtapes, or playlists. It's all music that I care about and want to listen to again, and the Library should give me the <span class="tooltip">tools I need to do that best<span class="tooltiptext">Library filters can be combined to narrow down lists of albums/artists/songs to just those I've uploaded or own, you can even create [Smart Playlists](https://support.apple.com/en-ie/guide/music-windows/mus1712973f4/windows) for these which automatically update.</span></span>.

For whatever reason, it takes a second or so for each song to be added to the library, meaning it was going to take a while to backfill the 10K+ songs I brought over from Spotify.

{% alert(tip=true) %}
Backfilling all of my imported playlists into the library took some time:

1. Select all songs within each playlist
2. Right-click and "Add to Library"
3. Wait...

Plugged in, I ran `caffeinate -s -i -u` to keep it awake (in every way imaginable), and left Apple Music in focus to work away. I tried with various individual flags, but only a combination of these and keeping the Apple Music window in focus worked. **I didn't try this on Windows**.
{% end %}

Now that I have all my music added to the Library, it's time to listen. But before we dive into that rabbit hole, I want to take a quick detour through Last.fm.

### Scribble Scrobble

The idea of music analytics has excited me since the first Spotify Wrapped, and I've made sure that since 2016 or so, all of my listening would be [tracked on Last.fm](https://www.last.fm/user/JesseAshmore/). Of course, Apple Music has **no support for third-party integrations like this.**

{% alert(tip=true) %}
To scrobble Apple Music across all of my devices, I used a combination of:

- [Pano Scrobbler](https://github.com/kawaiiDango/pano-scrobbler) on Android and Windows
  - I used [AMWin-RP](https://github.com/PKBeam/AMWin-RP/) for a while but simplified to using one app for both
- [Scrobbles for Last.fm](https://apps.apple.com/ie/app/scrobbles-for-last-fm/id1344679160?mt=12) on Mac

{% end %}

Back to the listening experience...

## The listening experience

As mentioned, I have a fairly broad ecosystem of devices, and being an Apple service, I was right to not be particularly optimistic about what lay ahead. While I've had no general issues with song playback, each device has come with its own challenges.

The first thing I noticed was that Apple Music has **no equivalent to Spotify Connect**.

### Regaining (remote) control

If you want to control music playback remotely, your options from each are:

- Android: Google Cast / Chromecast (from Apple Music or System)
- Apple: Airplay 1 or 2 (from Apple Music or System)
- Windows: Airplay 1 only (from Apple Music)

Of course, you can also use Bluetooth, but note that Bluetooth playback from Apple devices is [limited to 256Kbps AAC](https://support.apple.com/en-ie/118295).

This is all just a bit mad. Every device seems to have its own specific support and limitations for casting audio, the strangest one being that Windows even supports Airplay at all! But I don't have a Homepod with Airplay, and I don't want to have to turn my TV on to stream music. So what are my options?

The reason I want remote playback (like Spotify Connect) is to be able to stream music to my home audio system. This consists of:

- Wharfedale Evo 4.2 (bookshelf speakers; they do not fit on a bookshelf)
- Audiolab a6000 (amplifier)
- MiniDSP Flex (room correction for all inputs)
- Shanling CR60 (CD player/transport and ripper for archiving)
- HP Elitedesk 800 G3 Mini (home server and network streamer)

<details>
<summary>Using Spotify Connect to turn my home server into a network streamer</summary>

[Librespot](https://github.com/librespot-org/librespot), run through a Docker image ([librespot-docker](https://github.com/GioF71/librespot-docker)) was enough to get this working.

Note, you will need to follow the [librespot docs](https://github.com/librespot-org/librespot/blob/dev/README.md) to obtain your authorization keys and identify the appropriate audio backend and device.

Here's the rest of my `docker-compose.yaml` from above

```yaml
services:
  librespot:
    image: giof71/librespot:latest
    network_mode: host
    restart: unless-stopped
    container_name: librespot
    devices:
      - /dev/snd:/dev/snd
    environment:
      - DEVICE="plughw:CARD=DL,DEV=0" # A USB sound card
      - BITRATE=320
      - INITIAL_VOLUME=100
      - FORMAT="S24_3"
      - INITIAL_VOLUME=75
      - DEVICE_NAME=Homeserver
      - ENABLE_OAUTH=headless
      - ENABLE_CACHE=y
    volumes:
      - ./cache:/data/cache
      - ./config:/user/config
      - ./system-cache:/data/system-cache
  # ... Shairport
```

</details>

Sure, I _could_ connect over Bluetooth to the Audiolab or MiniDSP, but I don't want to have to handle pairing and disconnecting devices manually after every session or deal with [auto-switching issues](https://www.minidsp.com/community/threads/bluetooth-auto-switching-is-driving-me-crazy.19960/page-2). **Remote playback should be as simple as a few clicks on any device to start streaming.**

I looked into alternative clients, like [Cider](https://cider.sh/), and while it seems to support remote control, it's for iOS only, doesn't play back lossless, and has a [bit of a spotty reputation](https://www.reddit.com/r/AppleMusic/comments/vydyj8/i_know_everyone_likes_cider_but_the_devs_are/). Clearly, I would need either a Google Cast or Airplay receiver. It seems that Google Cast requires proprietary device certification, so running a headless receiver on my server was a no-go.

However, it turns out you _can_ run an Airplay receiver (or two) from Docker thanks to Shairport Sync!

#### Shairport Sync: Airplay via Docker

My home server is permanently connected to my audio system for streaming, this meant all I needed to do was get an Airplay receiver working and things should be golden.

{% alert(tip=true) %}
[Shairport Sync](https://github.com/mikebrady/shairport-sync) to the rescue.

Setting up Shairport Sync was super simple. Minimally, this was enough for an Airplay 2 container:

```yaml
shairport-sync:
  image: mikebrady/shairport-sync:latest
  container_name: shairport
  network_mode: host
  restart: unless-stopped
  devices:
    - "/dev/snd" # ALSA device, omit if using PulseAudio
  command: -- -d hw:1 # Run on ALSA device hw:1 (my USB sound card)
  logging:
    options:
      max-size: "200k"
      max-file: "10"
```

{% end %}

**But is it lossless?** As far as I can tell, [Shairport Sync should support lossless streaming](https://github.com/mikebrady/shairport-sync/issues/1205), but from some very basic network-watching it looks like devices using Airplay are transmitting at about 800-1000Kbps. This is theoretically better than the 256Kbps AAC stream at least, but I need to do some proper bit-perfect comparisons to see to if what it actually plays back looks correct.

<details>
<summary>Running Airplay 1 and 2 so that I can stream from Windows</summary>

As mentioned, Airplay 2 isn't supported from the Apple Music on Windows app:

<figure>
{{ image(url="windows-airplay-2.png", alt="Incompatibility between Apple Music on Windows and Airplay 2 devices", no_hover=true) }}
<figurecaption>Apple Music on Windows</figurecaption>
</figure>

Thankfully, [@jwillikers](https://github.com/mikebrady/shairport-sync/issues/1816#issuecomment-2476287591) found a workaround for running two instances concurrently. In short, you just need to consume the classic Shairport Sync image which uses Airplay 1 and differentiate the port through a config file.

First, add both services to your Docker Compose file.

```yaml
services:
  shairport-sync:
    image: mikebrady/shairport-sync:latest
    container_name: shairport
    # ...
    volumes:
      - ./shairport-sync.conf:/etc/shairport-sync.conf
  shairport-sync-airplay-1:
    image: mikebrady/shairport-sync:classic
    container_name: shairport-airplay-1
    # ...
    volumes:
      - ./shairport-sync-classic.conf:/etc/shairport-sync.conf
```

And in each config file:

```conf
// shairport-sync.conf

general =
{
        name = "%H (Airplay 2)";
        port = 7000; // 7000 for AirPlay 2.
        regtype = "_airplay._tcp"; // Only advertise AirPlay 2.
};

// shairport-sync-classic.conf
general =
{
        name = "%H (Airplay 1)";
        port = 5000; // 5000 for AirPlay 1.
};

// ...
```

Et voilà, Airplay 1 and 2 both available on my network:

<figure>
{{ image(url="windows-airplay-both.png", alt="Airplay 1 and 2 both available on my network", no_hover=true) }}
<figurecaption>Apple Music on Windows</figurecaption>
</figure>
</details>

#### Casting from Android

You may have noticed that Android does **not** support Airplay. This is a bit of a problem, but there was one app I found that worked for me.

{% alert(tip=true) %}
[AirMusic](https://www.airmusic.app/) for Android

This handy app comes in two variants, a free trial to make sure it all works with your setup first, and a paid pro version. I can happily report that this app supports casting audio from Apple Music over Airplay 1 or 2.

You might want to configure some settings around auto-disconnect, buffer, and volume controls for the best experience. I did also need to **disable battery optimization** for both apps, as Samsung likes to kill background processes aggressively.
{% end %}

It's surprising that Apple even allow audio casting/capture from Android, but I'm not going to complain. Instead, I'm going to complain about the other DRM Apple uses.

### FairPlay vs ShadowPlay

A week into my experience with Apple Music, I was feeling conflicted. I was loving the Apple Music app and music experience, but I'd invested a **significant** amount of time into figuring out all the quirks with the library, importing my music, and finding workarounds and alternatives to Last.fm and Spotify Connect. Tired from a week of debugging, I booted up Battlefield 6 to unwind, put on my favourite playlist, and...

<figure>
{{ image(url="fairplay.png", alt="Nvidia ShadowPlay popup about disabled desktop recording", no_hover=true) }}
<figcaption>Nvidia ShadowPlay</figcaption>
</figure>

{% alert(caution=true) %}
Nvidia ShadowPlay does not allow recording while Apple Music is playing.
{% end %}

Brilliant. The issue stems from [Apple FairPlay](https://en.wikipedia.org/wiki/FairPlay), a DRM system to protect Apple's various media playback methods. It seems that Apple Music uses FairPlay, which Nvidia does its best to respect by completely disabling recording when any playback is active.

It should go without saying that this is an awful way to respond to FairPlay content. Not only because Spotify doesn't have this issue. Not only because I can still record FairPlay content if I wish, even using Nvidia's NVENC encoder, in OBS. But also because it is lazy, and prevents me from using my hardware and software to do something very normal: listen to music while playing games and recording footage for personal use.

{% alert(tip=true) %}
Use OBS to record your gameplay using NVENC encoder and the replay buffer [to mimic ShadowPlay's Instant Replay feature](https://github.com/matthewp0/OBS-Alternative-to-Shadowplay). For equivalent behavior, you'll want to setup your default scene to record any active game window, configure hotkeys and quality settings, and start OBS automatically with a Task Scheduler entry:

- Trigger: At log on
- Action: Start a program
  - Program: `obs64.exe`
  - Start in: `"C:\Program Files\obs-studio\bin\64bit\"`
  - Arguments: `--startreplaybuffer --minimize-to-tray` (to immediately start recording silently)

{% end %}

## Conclusion

My goal with this post was firstly therapeutic. Each hurdle in my journey from Spotify to Apple Music induced a chunk of psychic damage. Friends and family were becoming numb to my constant ramblings about _Airplay_ and _The Library_. I needed an outlet without ears and patience, and at the same time, maybe I could be write something that would be of use to someone else on the same path in the future.

It's easy to think of all of this as just sunk-cost. Why not just go back to Spotify, a world where this post didn't even need to exist? Through the course of writing this diary entry/troubleshooting runbook, I've found some peace within the madness. There's purpose in spending time organizing my music, in making technology work the way I think it ought to, and in journaling my experiences.

These are all deeply important parts of who I am, and now I feel like I know a little bit more about those parts.

<!-- This makes the tooltip float and follow the mouse -->
<!-- TODO: For mobile, make the tooltip a pop-up from the bottom of the screen -->
<!-- Also make this clickable to stay open. Maybe remove the hover entirely -->
<script>
var tooltip = document.querySelectorAll('.tooltiptext');

document.addEventListener('mousemove', fn, false);

function fn(e) {
  for (var i=tooltip.length; i--;) {
      const bound = tooltip[i].getBoundingClientRect();
      tooltip[i].style.left = `${e.clientX - (bound.width / 2)}px`;
      tooltip[i].style.top = `${e.clientY}px`;
  }
}
</script>
