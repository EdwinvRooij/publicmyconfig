// --- General settings ---

settings.hintAlign = "left";
settings.startToShowEmoji = 1;
settings.scrollStepSize = 120; // faster 'jk' scrolling
Hints.characters = 'aoeuidhtnspyfgcrl'; // all Dvorak first and second row alphabetic characters



// --- Unmap unused commands to prevent confusion and noise ---

// Help
unmap('sql');

// Mouse click
unmap(';m');

// Chrome URLs
unmap(';j');
unmap('si');
unmap('ga');
unmap('gc');
unmap('gk');
unmap('gn');

// Proxy
unmap('cp');
unmap(';cp');
unmap(';ap');
unmap('spa');
unmap('spb');
unmap('sps');
unmap('spc');
unmap('spi');
unmap('spd');
unmap('sfr');


// Misc
unmap(';q');

// Insert mode
iunmap('<Ctrl-f>');
iunmap('<Alt-b>');
iunmap('<Alt-f>');
iunmap('<Alt-w>');
iunmap('<Alt-d>');
iunmap("<Ctrl-'>");
imapkey('nh', '<Esc>');



// --- Own mappings ---

// Open links
map('u', 'f');
unmap('f');

unmap('af');
map('U', 'af');

unmap('gf');
map('gu', 'gf');

unmap('cf');
map('cu', 'cf');

// More natural previous/back navigation
unmap('>>');
unmap('<<');
map('>', ']]');
map('<', '[[');
unmap('[[');
unmap(']]');

// More confortable tab movement
map('J', 'E');
map('K', 'R');

// Tab history management
map('h', 'S');
map('l', 'D');

// Search with space
map('<Space>', '/');