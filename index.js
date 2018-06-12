#!/usr/bin/env node
const debug = require('debug')('mdcat');
const TextRenderer = require('mobiledoc-text-renderer').default;
const concat = require('concat-stream');

function gotMobiledoc (mobiledocBuffer) {
  debug('🤖 buffer', mobiledocBuffer);
  const md = JSON.parse(mobiledocBuffer);
  debug('👩‍🔬 json', md);
  const renderer = new TextRenderer({ cards: [] });
  const rendered = renderer.render(md);
  debug('📃 result', rendered.result);
  process.stdout.write(rendered.result);
  rendered.teardown();
}

process.stdin.on('error', err => {
  console.error(err);
  process.exit(1);
});

const cs = concat(gotMobiledoc);
process.stdin.pipe(cs);
