# sails-hook-bunyanlog
#
# @author      Robert Rossmann <rr.rossmann@me.com>
# @copyright   2016 Robert Rossmann
# @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License

# Default - Run it all! (except for coveralls - that should be run only from Travis)
all: install lint test coverage

include targets/nodejs/base.mk
include targets/nodejs/install.mk
include targets/nodejs/lint.mk
include targets/nodejs/test.mk
include targets/nodejs/coverage.mk
include targets/nodejs/coveralls.mk

# Project-specific information
ghuser = Alaneor
lintfiles = lib test
testflags += --recursive
testflags += --globals sails,FILE_PARSER_LOGGER_ENABLED

# This file allows local Make target customisations without having to worry about them being
# accidentally commited to this file. local.mk is in gitignore. This file does not have to exist.
-include local.mk
