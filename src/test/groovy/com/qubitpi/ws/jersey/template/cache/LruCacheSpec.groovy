/*
 * Copyright Jiaqi Liu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.qubitpi.ws.jersey.template.cache

import spock.lang.Specification

class LruCacheSpec extends Specification {

    @SuppressWarnings(["GroovyAccessibility"])
    def "the least frequently used cache entry is removed when cache is full"() {
        given: "a cache with cache size of 2"
        LruCache<String, String> cache = new LruCache<>(2)

        when: "inserting 2 entries into cache to make it full"
        cache.put("foo", "bar")
        cache.put("bat", "baz")

        then: "all inserted entries are there"
        cache.toString() == "[foo:bar, bat:baz]"

        when: "outdate an entry and putting a new cache entry into the cache"
        cache.get("bat")
        cache.put("new", "new")

        then: "the outdated entry is reomved"
        cache.toString() == "[bat:baz, new:new]"
    }

    def "static factory method produces a new instances"() {
        given: "two instance produced by the same static factory method"
        LruCache<String, String> first = LruCache.ofSize(3)
        LruCache<String, String> second = LruCache.ofSize(3)

        expect: "the two instances are different objects"
        ! first.is(second)
    }
}
