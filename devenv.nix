{pkgs, ...}: {
  packages = [
    pkgs.nodePackages_latest.pyright
  ];

  languages.python = {
    enable = true;
    package = pkgs.python311Full;
    poetry.enable = true;
  };

  languages.javascript.enable = true;

  services.postgres = {
    enable = true;
    initialScript = ''
      CREATE ROLE postgres WITH LOGIN SUPERUSER PASSWORD 'postgres';
    '';
    initialDatabases = [
      {name = "backend";}
    ];
  };
}
