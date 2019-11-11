with import <nixpkgs> { };

stdenv.mkDerivation rec {
  name = "kbooks-front-${version}";
  version = "0.1.0";

  buildInputs = with pkgs; [ 
    gettext
  ];

  shellHook = ''
    export CYPRESS_INSTALL_BINARY=0
    export CYPRESS_RUN_BINARY=${pkgs.cypress}/opt/cypress/Cypress
  '';

}
