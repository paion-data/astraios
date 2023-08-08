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
package com.qubitpi.ws.jersey.template.cache;

import jakarta.validation.constraints.NotNull;
import net.jcip.annotations.NotThreadSafe;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * LRU Cache.
 *
 * @param <K>  The type of keys maintained by this cache
 * @param <V>  The type of cached values
 */
@NotThreadSafe
public class LruCache<K, V> extends LinkedHashMap<K, V> {

    private static final long serialVersionUID = -5727315380707628908L;

    private final int cacheSize;

    /**
     * Constructs an empty {@link LruCache} instance with the provided maximum number of entries hold in the cache.
     *
     * @param cacheSize  Maximum number of entries in cache
     */
    private LruCache(final int cacheSize) {
        super(cacheSize * 4 / 3, 0.75f, true);
        this.cacheSize = cacheSize;
    }

    /**
     * Creates a new instance of {@link LruCache} with the provided maximum number of entries hold in the cache.
     *
     * @param cacheSize  Maximum number of entries in cache
     *
     * @param <K>  The type of keys maintained by this cache
     * @param <V>  The type of cached values
     *
     * @return a new initialized {@link LruCache} instance
     */
    @NotNull
    public static <K, V> LruCache<K, V> ofSize(final int cacheSize) {
        return new LruCache<>(cacheSize);
    }

    @Override
    protected boolean removeEldestEntry(final Map.Entry<K, V> eldest) {
        return size() > getCacheSize();
    }

    private int getCacheSize() {
        return cacheSize;
    }
}
