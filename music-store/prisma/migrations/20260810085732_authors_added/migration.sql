-- CreateTable
CREATE TABLE "artists" (
    "id" UUID NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "country" VARCHAR(32) NOT NULL,
    "description" VARCHAR(1024),
    "photo" VARCHAR(512) NOT NULL,
    "date_of_birth" TIMESTAMPTZ NOT NULL,
    "date_of_death" TIMESTAMPTZ,

    CONSTRAINT "artists_pkey" PRIMARY KEY ("id")
);
