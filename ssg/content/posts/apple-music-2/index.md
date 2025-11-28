+++
title = "From Spotify to Apple Music — every sharp edge"
date = 2025-11-25
external_links_target_blank = true
[extra]
featured = true
toc = true
+++

<div class="card">
This is the second entry in a duology of posts covering my move from Spotify to Apple Music.

[In the previous entry](/posts/apple-music-1), I detailed my process for music discovery and curation and reflect on what music as a hobby means to me. Here, I cover my journey of onboarding and adapting to Apple Music as a primarily non-Apple user. This entry serves as both documentation and a trouble-shooting guide for future users in a similar boat. **This will get technical.**

</div>

---

Apple (like Qobuz) is generous enough to provide free access to [SongShift](https://www.songshift.com/) for users moving their music from other platforms to Apple Music (AM).

<aside>
<figure>
{{ image(url="android-transfer.webp", alt="Apple Music (Android): Playlist transfer", no_hover=true)}}
<figcaption>Apple Music (Android): Playlist transfer</figcaption>
</figure>
</aside>

Within a few minutes I kicked off the process to move all my playlists, and only an hour or so later it had completed. Given some playlists had thousands of songs, the speed and accuracy of the migration was impressive; playlists with hundreds of songs were only missing a one or two. Factoring in some artists who recently pulled their music from Spotify, I wouldn't be surprised if I actually _(re-)gained_ music during the process.

Although it didn't copy my folder structure, it only took a few minutes to create them by hand and get back to the same point I left from with Spotify. This was a great first impression that would continue through the rest of the Android app experience. It's fast, looks gorgeous, and has most of the features I want from a portable music app.

It breezes through tens of thousands of tracks in my Library without a hitch. It also has pretty good feature parity with Apple devices, sometimes **even getting new features (like AutoMix) first due to not being tied to iOS and macOS release cycles**. The only quirks I've found with the app so far are that

1. It really likes to remember recent screens, to the point where navigating one logical layer 'up' the component tree takes quite a few back button presses
2. Sometimes it just... stops, either restarting itself or needing a manual force close

Overall, it's surprisingly solid experience given it's an Apple product on Android. It even supports streaming music you own and upload to AM, without needing to download it first.

## Bring your own music

> I miss Google Play Music, but this is _maybe_ the next best thing.

AM's roots in iTunes and their focus on music ownership serves users with existing digital collections very well. From any desktop device (Windows or Mac), you can upload local files to your AM account and have these available in your Library to stream anywhere. This is an excellent answer to Spotify's somewhat lackluster 'Local Files' feature, which is an opt-in feature and requires at least one computer to have a copy of the files on the same network for others to sync from.

Unfortunately, the import process for AM isn't perfect either.

### Alac of supported formats

Despite being able to import local music in a variety of popular formats including MP3, **FLAC is not supported for imports**. This is unusual given support for their own, equivalent lossless ALAC format and others like WAV.

In any case, I got around this by using [MediaHuman Audio Converter](https://www.mediahuman.com/audio-converter/) (Windows _and_ Mac) to convert 50GB+ of FLACs to ALAC. You could also do this with `ffmpeg` directly, but I never figured out all the flags needed to preserve directory structures and metadata along the way.

Once converted, importing was as simple as going to `Library > Import > Upload folder to library` on Windows.

<details>
<summary>Aside: OneDrive and Apple Music conflicts</summary>

On Windows, AM uses your local user's _Music_ folder (`%UserProfile%\Music`) to store library data, cache, downloaded tracks, and imported music (if you choose to copy imported files). There's a handy option in the settings which allows you to change this:

<figure>
{{ image(url="windows-music-folder.webp", alt="An option allowing users to control where Apple stores its library and other data", no_hover=true)}}
<figcaption>An option allowing users to control where Apple stores its library and other data</figcaption>
</figure>

**This setting does not work.** _Mostly_.

While _some_ data respects this location, such as imports and underlying library files, the app still seems to keep other types of data in `%UserProfile%\Music`. From what I can tell, it creates directories and files like metadata and artwork _for every song you play_. This quickly adds up to a huge number of files, which is a problem if you keep your Music library synced in OneDrive, which many users will do by-default these days.

{% alert(tip=true) %}
You _could_ manipulate the default location through editing some config or registry files, but I decided to bite the bullet and just **move my actual Music data to a separate OneDrive folder, and turned off OneDrive backup for `%UserProfile%\Music`**. AM still creates metadata files, but does so outside of OneDrive. This comes with the minor added benefit that, as long as you have enough storage space, you can also enable the setting to copy files on import, just to make sure there are no links back to source media.

This is one of many behavioural changes that AM will ask of its users that do not follow the yellow brick road of Cupertino.
{% end %}

</details>

After importing my playlists and uploading my local music, I discovered two strange issues:

1. Many albums uploaded from my local collection were missing random songs
2. Playlists would occasionally lose tracks or appear to reset to earlier states

### Mystery 1: Missing uploads

<aside>
<figure>
{{ image(url="apple-missing-songs.webp", alt="An album in Apple Music with missing songs", no_hover=true)}}
<figcaption>Missing tracks from an uploaded album</figcaption>
</figure>
</aside>
It seems with a large enough collection, the app will lose track (hah!) of certain songs during the upload/matching process, leaving you with partial albums. After several attempts to re-upload the collection and even the missing songs individually, I couldn't get them to appear in my library.

{% alert(tip=true) %}
What worked was to try and re-upload all my albums again from a different device (like my Mac), only then were the gaps in my albums filled correctly. Maybe this was just bad luck.
{% end %}

### Mystery 2: Missing playlist songs

A few days later, I opened my Starred 2025 playlist as usual. To my horror, all the songs I added to it since migrating from Spotify disappeared before my eyes. What just happened?! I saw them there, then it performed some sort of sync and everything recently added was removed.

**This was my fault**, but it wasn't immediately obvious why.

<figure>
<aside>
{{ image(url="apple-library-add.webp", alt="Toggles to control 'Add to library' features", no_hover=true)}}
<figcaption>Toggles to control 'Add to library' features</figcaption>
</figure>
</aside>
Coming from Spotify, it's easy to assume the _library_ is just an arbitrary list of songs you might have "Liked" or added to playlists in the past. In fact, in AM, there are settings to make it behave the same way:

{% alert(caution=true,text="hello") %}
The Library is _**not**_ just some arbitrary list.
{% end %}

If a song is a part of your library _and_ in a playlist, they are now inextricably linked, **with the Library taking priority**. This means that deleting a song from your library will **also remove it from any playlists** it's a part of.

After I migrated, I had enabled the two _auto-add_ toggles without much thought, but later changed my mind and decided to try to keep my Library and playlists separate, with the former used only for 'owned' music. So, I selected everything in my library I hadn't uploaded myself, and hit delete. With it, all the music I had collected since my initial migration was lost.

It actually took multiple instances of this happening before I finally realized what I'd done and the relationship between playlists and the Library. [I'm not the only one confused by this behavior](https://www.reddit.com/r/AppleMusic/comments/1fnjbiz/deleting_songs_from_library_deletes_them_from/).

## Leaning into the Library

From a curation perspective, there's no fundamental difference between my collection of physical media, childhood mixtapes, or playlists; it's all music that I care about and want to listen to again.

In theory, and the Library should have the <span class="tooltip" tabindex="0">tools I need to wrangle my full collection<span class="tooltiptext">Library filters can be combined to narrow down lists of albums/artists/songs to just those I've uploaded or own, you can even create [Smart Playlists](https://support.apple.com/en-ie/guide/music-windows/mus1712973f4/windows) for these which automatically update.</span></span>. So, despite my shaky experience with the Library so far, I changed my mind _again_, and decided to re-add everything to the Library—including everything I had brought over from Spotify.

Playlist-by-playlist I repeated the ritual:

1. Open a playlist
2. Select all songs
3. Right-click and "Add to Library"
4. Wait...

This took a bit longer than expected.

{% alert(tip=true) %}
For whatever reason, it takes a second or so for each song to be added to the library, meaning it was going to take a while to backfill the 10K+ songs I brought over from Spotify. I only tried this on AM for Mac, mind you.

Plugged in, I ran `caffeinate -s -u` to keep it awake (and the user active), and left AM in focus to work away. I tried with various individual flags, but only a combination of these and keeping the AM window in focus worked. **I didn't try this on Windows**.
{% end %}

Now that I have all my music added to the Library, it's time to start listening and teach my _Apple Music Genius_ a thing or two. Soon it'll build up a profile for me, I'll start getting some good recommendations, and then I'll have my Spotify Wrapped—... _Oh, God!_ My Spotify Wrapped! My analytics!

### Please take my data and show it back to me

The idea of music analytics has excited me since the first Spotify Wrapped, and I've made sure that since 2016 or so, all of my listening would be [tracked on Last.fm](https://www.last.fm/user/JesseAshmore/). This turned out to be great foresight, now I really _could_ preserve my music listening history from Spotify.

But of course, AM has **no support for third-party integrations with Last.fm**, meaning any new <span class="tooltip" tabindex="0">_scrobbles_<span class="tooltiptext">A scrobble is a single play of a song, tracked on Last.fm.<br/><br/>At least it's a memorable name.</span></span> would be Apple's knowledge alone.

I briefly went down a bit of rabbit hole seeing if was possible to import my Last.fm or Spotify listening data directly into AM—at least that way I could continue where I left off—but as of 2025, <span class="tooltip" tabindex="0">it's not possible.<span class="tooltiptext">AM stores its Library locally in an [encrypted **and** compressed format called `musicdb`](https://home.vollink.com/gary/playlister/musicdb.html). This is a proprietary format which has not yet been cracked, meaning there's no real way to backfill listening history data.</span></span>

{% alert(tip=true) %}
To scrobble my plays on Apple Music, I use a combination of apps across devices:

- [Pano Scrobbler](https://github.com/kawaiiDango/pano-scrobbler) on Android and Windows
  - I used [AMWin-RP](https://github.com/PKBeam/AMWin-RP/) for a while but simplified to using one app for both.
    - This comes with extra features like Discord's _Rich Presence_ (_the RP in the name_ 💡)
- [Scrobbles for Last.fm](https://apps.apple.com/ie/app/scrobbles-for-last-fm/id1344679160?mt=12) on Mac

{% end %}

I'm not happy about needing more third party apps, but I'm grateful community solutions exist to fill the gaps that Apple has yet to. This would continue to be a general pattern during my migration, especially as I tried to replicate my previous listening setup.

## The listening experience

I have a fairly broad ecosystem of devices, and being an Apple service, I was right not to be particularly optimistic about what lay ahead. While I've had no _general_ issues with song playback—the most basic function for a music app, to be fair—each device has come with its own challenges.

The first hurdle I faced during general listening was that Apple Music has **no equivalent to Spotify Connect**.

### Regaining (remote) control

If you want to control music playback remotely, your (official) options are:

- From Android: Google Cast / Chromecast (from Apple Music or System)
- Apple: Airplay 1 or 2 (from Apple Music or System)
- Windows: Airplay 1 only (from Apple Music)

But these are not truly remote control methods, it's just casting. Of course, you can also 'cast' over Bluetooth to any equipped receivers, but do note that Bluetooth playback from Apple devices at least is [limited to 256Kbps AAC](https://support.apple.com/en-ie/118295). On Android, the situation with lossless audio is [more complicated](https://www.androidauthority.com/android-audiophile-guide-3611225/).

This is all just a bit mad. Every device seems to have its own specific support and limitations for casting audio, the strangest one being that Windows even supports Airplay at all! But I don't have a Homepod with Airplay, and I don't want to have to turn my TV on to stream music. So what are my _other_ options?

The reason I want remote playback (like Spotify Connect) is to be able to stream music to my home audio system. This consists of:

- Wharfedale Evo 4.2 (bookshelf speakers; they do not fit on a bookshelf)
- Audiolab a6000 (amplifier)
- MiniDSP Flex (room correction for all inputs)
- Shanling CR60 (CD player/transport and ripper for archiving)
- HP Elitedesk 800 G3 Mini (home server and network streamer)

<details>
<summary>Aside: turning my home server into a Spotify Connect receiver with librespot</summary>

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

I looked into alternative clients like [Cider](https://cider.sh/). While it seems to support remote control, it's for iOS only, doesn't play back lossless, and has a [bit of a messy reputation](https://www.reddit.com/r/AppleMusic/comments/vydyj8/i_know_everyone_likes_cider_but_the_devs_are/). Clearly, I would need either a Google Cast or Airplay receiver.

It seems that Google Cast is actually a <span class="tooltip" tabindex="0">proprietary protocol<span class="tooltiptext">Google, please release an open standard, it doesn't need to support DRM!</span></span>, and requires some sort of official device certification, so running a headless receiver on my server was a no-go. But what about Airplay?

#### Shairport Sync: Airplay via Docker

{% alert(tip=true) %}
My home server is permanently connected to my audio system for streaming, this meant all I needed to do was get an Airplay receiver working and things should be golden. Fortune was in my favour too, thanks to an open source Airplay receiver project called [Shairport Sync](https://github.com/mikebrady/shairport-sync).

Shairport Sync provides an example [Docker Compose](https://github.com/mikebrady/shairport-sync/blob/3c8ceb7c97c8782903ec48e280023436711e0913/docker/docker-compose.yaml) snippet, making setting up an Airplay 2 container super simple.

If using ALSA,you'll want to run `aplay -L` and/or `aplay -l` to identify which device to output sound to. In my case, `hw: 1` is the MiniDSP Flex. You can specify the device either through a configuration file, or directly in the Docker Compose service with `command: -- -d hw:1`.
{% end %}

**But is it lossless?** As far as I can tell, [Shairport Sync should support lossless streaming](https://github.com/mikebrady/shairport-sync/issues/1205), but from some very basic network-watching it looks like devices using Airplay are transmitting at about 800-1000Kbps. This is theoretically better than the 256Kbps AAC stream at least, but I need to do some proper bit-perfect comparisons to see to if what it actually plays back looks correct.

**Do I really need lossless?** Not really. I can't reliably pass a [lossless quality blind test](https://www.npr.org/sections/therecord/2015/06/02/411473508/how-well-can-you-hear-audio-quality), so the most tangible difference is more bandwidth and storage usage. **But**, there is a peace of mind for me in knowing that what I'm sending through my system is as unaltered from source as possible—before I make [my own alterations](https://www.minidsp.com/applications/digital-room-correction/drc-basics), of course.

In any case, the casting experience from Mac works as-expected, and even works well with Windows (if you're willing to use Airplay 2).

#### Casting from Windows

Unfortunately, after setting up Shairport Sync, I discovered that the Windows AM app does **not** support Airplay 2 for some reason.

<figure>
{{ image(url="windows-airplay-2.webp", alt="Incompatibility between Apple Music on Windows and Airplay 2 devices", no_hover=true) }}
<figcaption>AMW playback error with Airplay 2</figcaption>
</figure>

Obviously, you could just run a single Airplay 1 instance (`mikebrady/shairport-sync:classic`) instead and call it a day, but where's the fun in that?

<details>
<summary>Running Airplay 1 and 2 so that I can stream from Windows</summary>

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

Now, Airplay 1 and 2 both available on my network:

<figure>
{{ image(url="windows-airplay-both.webp", alt="Airplay 1 and 2 both available on my network", no_hover=true) }}
<figurecaption>Both Airplay 1 and 2 devices visible in AMW, only Airplay 1 works, though.</figurecaption>
</figure>
</details>

#### Casting from Android

It's not a huge surprise that the Android AM app doesn't support Airplay natively, but given the support in the Windows app, it would be great if Apple gave the option to integrate with _their own ecosystem_. This means that, once again, we need to reach for community solutions.

A few apps out there claim to support casting to Airplay devices, but un my experience, I found just one to work reliably.

{% alert(tip=true) %}
[AirMusic](https://www.airmusic.app/) for Android comes in two variants:

1. A free trial to make sure it all works with your setup first
2. A paid pro version.

I can happily report that this app supports casting audio from Apple Music over Airplay 1 or 2, pretty flawlessly too!

You might want to configure some settings around auto-disconnect, buffer, and volume controls for the best experience. I did also need to **disable battery optimization** for both apps, as Samsung likes to kill background processes aggressively.
{% end %}

It's surprising that Apple even allow audio capture from their Android app in the first place, as many other services (including Spotify) do not. But I'm not going to complain about it. Instead, I'm going to complain about the other DRM Apple uses.

### FairPlay vs ShadowPlay

A week into my experience with Apple Music, I was feeling conflicted. I was loving the AM app and music experience, but I'd invested a **significant** amount of time into figuring out all the quirks with the library, importing my music, and finding workarounds and alternatives to Last.fm and Spotify Connect. Tired from a week of debugging, I booted up Battlefield 6 to unwind, put on my favourite playlist, and was greeted with another test of my resolve:

<figure>
{{ image(url="fairplay.webp", alt="Nvidia ShadowPlay popup about disabled desktop recording", no_hover=true) }}
<figcaption>Nvidia ShadowPlay</figcaption>
</figure>

{% alert(caution=true) %}
Nvidia ShadowPlay does not allow recording while Apple Music is playing.
{% end %}

Brilliant.

The issue stems from [Apple FairPlay](https://en.wikipedia.org/wiki/FairPlay), a DRM system to protect Apple's various media playback methods. It seems that AM uses FairPlay, which Nvidia does its best to respect by completely disabling recording when music playback is active.

It should go without saying that **this is an awful way for Nvidia's ShadowPlay to react to FairPlay content**. It is a lazy, bureaucratic Not only because Spotify _doesn't_ have this issue. Not only because I can still record FairPlay content with OBS if I really wanted, even using Nvidia's NVENC encoder. But also because it is lazy, and prevents me from using my hardware and software to do something very normal: listen to music while playing games and recording footage for personal use.

This one seemed like it might be a dead end, but I _suspect_ there are some cheeky workarounds to be found here:

- What if I Airplay'ed back to my own PC?
- Could I use Virtual Audio Cables to route things around and fool Nvidia?
- What about playing audio from some sort of sandbox to strip the DRM? (obligatory <q>don't do this</q> as it's almost certainly against ToS)

Rather that adding more layers of misdirection in my setup, I figured the easiest thing was to remove Nvidia from the equation entirely.

I've always had issues with ShadowPlay turning off, and generally find its overlay clunky and bloated. I've continued using it for so long because it (1) provides an easy solution to record everything I play automatically in the background (2) using the efficient NVENC encoder built into the GPU which avoids much of the performance impact from software-based encoders. But you don't necessarily need ShadowPlay to achieve either of these.

{% alert(tip=true) %}
Use [OBS](https://obsproject.com/) to record your gameplay using NVENC encoder and the replay buffer [to mimic ShadowPlay's Instant Replay feature](https://github.com/matthewp0/OBS-Alternative-to-Shadowplay). This proved to be by far the simplest solution, and in the end, I think I even prefer it over ShadowPlay.

For equivalent behavior, you'll want to setup your default scene to record any active game window, configure hotkeys and quality settings, and start OBS automatically with a Task Scheduler entry:

- Trigger: At log on
- Action: Start a program
  - Program: `obs64.exe`
  - Start in: `"C:\Program Files\obs-studio\bin\64bit\"`
  - Arguments:
    - `--startreplaybuffer --minimize-to-tray` - starts OBS silently and immediately starts the replay buffer.
    - `--disable-shutdown-check` prevents prompts for using _safe mode_ after previous unclean shutdowns, i.e. turning off the PC while replay buffer is running

{% end %}

With this last hurdle out of the way, I finally feel like I've earned my place as a non-Apple native in the Apple Music ecosystem. And since writing this post, I haven't encountered any more major issues with AM. Yet.

---

## Technology as a hobby

It's easy to think of all of this as just sunk-cost. <q>Why not just go back to Spotify, a world where this post didn't even need to exist?</q> As much as I'd like to wax poetic about technology being an art form—which I really think it is—I admit that in many cases, technology is a means to an end. So when something doesn't work the way I think it ought to, it frustrates me. When a piece of software complains about incompatibility, or I find myself squeezed into a forgotten or _unprofitable_ edge case, I can't rest until I find a workaround.

Technology, like music, is often a labour of passion, discovery, and excitement for me. That's a lot of emotion to process internally, and friends and family were becoming numb to my constant ramblings about _Airplay_, _The Library_, and _Docker_; I needed an outlet without ears or need of patience. At the same time, I didn't want my learnings to be forgotten.

This post quickly grew from a bulleted list of my findings into a more detailed troubleshooting guide, the introduction evolved into a longer reflection piece, and eventually both were published as two separate posts of their own right. **Ironically, it's taken me _far_ longer to write this than I spent fighting with Apple Music in the first place**, but I've gained something more than an overly-complicated listening setup.

No matter the topic, I always learn something new about myself through writing. Music and technology are deeply intertwined in my life, the nature of their relationship changing over time as my own priorities and environment have changed. When it comes to music, sometimes I want a more _analogue_ experience, sometimes I look to technology to overcome the physical limits of my environment or tools. With each swing of the pendulum, I explore new processes and develop new preferences, but my passion for music—and technology—only grows.
