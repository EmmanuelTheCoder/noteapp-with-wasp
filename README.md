# noteapp-with-wasp

## How to install Wasp

Run the following command in your terminal to install Wasp:

```
curl -sSL https://get.wasp-lang.dev/installer.sh | sh
```

| info Note to Windows users |
 Wasp is currently not 100% compatible with Windows. The best way to use Wasp on Windows is through [WSL](https://learn.microsoft.com/en-us/windows/wsl/install).
 Run the Wasp installation command after installing WSL on your Windows machine.|
 
 | --- |


## Starting a new Wasp project

To start a new Wasp project, run the following command:

```
wasp new NoteApp # Creates a new web app named NoteApp.
cd NoteApp
wasp start # Serves the web app.
```

## Deploying Wasp

Run the following code to build and prepare your code for deployment

```
wasp build
```
then deploy Wasp to Fly.io with a one-line command:

```
wasp deploy fly launch NoteApp ams
```
NB: `ams` stands for Amsterdam. You can select any avaliable Fly.io server locations.


