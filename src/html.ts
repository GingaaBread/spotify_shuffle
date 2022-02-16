import { Album } from "./album";

export class Html {
  public static page(artistName: string) : string
  {
    return `
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#000000">    
    <title>%%ARTIST_NAME%% Shuffle</title>
    <meta name="description" content="Randomly selects a '%%ARTIST_NAME%%' episode for you to listen to on Spotify.">
    <meta property="og:title" content="%%ARTIST_NAME%% Shuffle">
    <meta property="og:type" content="website">
  </head>
  
  <body style="background: black; margin: 0">
        %%RESULT%%
  </body>
  </html>
  `.replace("%%ARTIST_NAME%%", artistName);
  }

  private static resultElement(album: Album) : string
  {
      return `
        <div style="overflow: hidden; height: 100%; align-items: center; justify-content: center; display: flex; flex-direction: column">
            <h3 style="margin-bottom: 1em; color: lightgray">Probiere doch mal diese Folge:</h3>
            <a href="${album.url}">
                <img 
                    style="width: calc(90vw); height: auto; max-width: 640; max-height: 640"
                    srcset="${album.image64Url} 64w, ${album.image300Url} 300w,${album.image640Url} 640w"
                    sizes="(max-width: 71px) 64px, (max-width: 333px) 300px, 640px"
                    src="${album.image640Url}">

            </a>
            <small style="color: gray; margin-top: 0.5em">Klicke auf das Cover um Spotify zu öffnen.</small>
            <a href="/" style="max-width: calc(90vw); margin-top: 1em; color: lightgray">weiterer Vorschlag</a>
        </div>
      `
  }

  public static forResult(album: Album, artistName: string) : string
  {
    let element = this.resultElement(album);
    return this.page(artistName).replace("%%RESULT%%", element);
  }
}